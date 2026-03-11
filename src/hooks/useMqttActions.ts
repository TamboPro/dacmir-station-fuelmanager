// hooks/useMqttActions.ts
import { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import mqtt, { MqttClient, IClientOptions, Packet } from 'mqtt'
import mqttService from '@/services/mqttService'
import {
  setConnected,
  setConnecting,
  setConnectionError,
  addTestResult,
  incrementMessagesSent,
  incrementMessagesReceived,
  updateFuelData,
  updatePumpData,
  updateCamera1,
  updateCamera2,
  RootState
} from '@/store/store'

export const useMqttActions = () => {
  const dispatch = useDispatch()
  const config = useSelector((state: RootState) => state.config)
  const stationData = useSelector((state: RootState) => state.stationData)

  const [isConnected, setIsConnected] = useState(false)

  // Synchroniser l'état avec le client global au montage
  useEffect(() => {
    setIsConnected(mqttService.isClientConnected())
  }, [])

  // Fonction pour traiter les messages MQTT et mettre à jour le store
  const processMqttMessage = useCallback((topic: string, message: Buffer) => {
    try {
      const messageString = message.toString()
      const data = JSON.parse(messageString)
      const topicParts = topic.split('/')
      const station = topicParts[1]
      const sensorType = topicParts[2]

      if (station === config.stationName) {
        if (sensorType === 'data') {
          // Traitement du format complet des données de la station
          if (data.fuels) {
            Object.entries(data.fuels).forEach(([fuelType, value]) => {
              // Clés valides de carburants
              const validFuelTypes = ['essence1', 'essence2', 'petrol', 'gazoil']
              if (validFuelTypes.includes(fuelType)) {
                dispatch(updateFuelData({
                  type: fuelType as keyof typeof stationData.fuels,
                  value: value as number
                }))
              }
            })
          }

          if (data.pumps) {
            Object.entries(data.pumps).forEach(([pumpType, value]) => {
              // Clés valides de pompes
              const validPumpTypes = ['pompe1', 'pompe2', 'pompe3', 'pompe4']
              if (validPumpTypes.includes(pumpType)) {
                dispatch(updatePumpData({
                  type: pumpType as keyof typeof stationData.pumps,
                  value: value as number
                }))
              }
            })
          }

          dispatch(addTestResult(`📊 Données station mises à jour`))
        } else {
          // Ancien format pour la rétrocompatibilité
          switch (sensorType) {
            case 'essence1':
              dispatch(updateFuelData({ type: 'essence1', value: data.value }))
              dispatch(addTestResult(`⛽ Essence 1 mis à jour: ${data.value}L`))
              break
            case 'essence2':
              dispatch(updateFuelData({ type: 'essence2', value: data.value }))
              dispatch(addTestResult(`⛽ Essence 2 mis à jour: ${data.value}L`))
              break
            case 'petrol':
              dispatch(updateFuelData({ type: 'petrol', value: data.value }))
              dispatch(addTestResult(`⛽ Pétrol mis à jour: ${data.value}L`))
              break
            case 'gazoil':
              dispatch(updateFuelData({ type: 'gazoil', value: data.value }))
              dispatch(addTestResult(`⛽ Gazoil mis à jour: ${data.value}L`))
              break
            case 'pompe1':
              dispatch(updatePumpData({ type: 'pompe1', value: data.value }))
              dispatch(addTestResult(`⛽ Pompe 1 mis à jour: ${data.value}L`))
              break
            case 'pompe2':
              dispatch(updatePumpData({ type: 'pompe2', value: data.value }))
              dispatch(addTestResult(`⛽ Pompe 2 mis à jour: ${data.value}L`))
              break
            case 'pompe3':
              dispatch(updatePumpData({ type: 'pompe3', value: data.value }))
              dispatch(addTestResult(`⛽ Pompe 3 mis à jour: ${data.value}L`))
              break
            case 'pompe4':
              dispatch(updatePumpData({ type: 'pompe4', value: data.value }))
              dispatch(addTestResult(`⛽ Pompe 4 mis à jour: ${data.value}L`))
              break
            case 'camera1':
              dispatch(updateCamera1(data.imageUrl))
              dispatch(addTestResult(`📷 Camera 1 image mise à jour`))
              break
            case 'camera2':
              dispatch(updateCamera2(data.imageUrl))
              dispatch(addTestResult(`📷 Camera 2 image mise à jour`))
              break
            default:
              dispatch(addTestResult(`📨 Message reçu sur ${topic}: ${JSON.stringify(data)}`))
          }
        }
      }
    } catch (error) {
      console.error('Error processing MQTT message:', error)
      dispatch(addTestResult(`❌ Erreur de traitement du message: ${error instanceof Error ? error.message : String(error)}`))
    }
  }, [config.stationName, dispatch])

  const connectMqtt = useCallback(() => {
    try {
      // Vérifier si une connexion existe déjà
      if (mqttService.isClientConnected() || mqttService.isClientConnecting()) {
        dispatch(addTestResult('✅ Une connexion est déjà active'))
        return
      }

      dispatch(setConnecting())
      dispatch(addTestResult(`🔗 Tentative de connexion à ${config.mqttUrl}`))

      // Configuration des options MQTT
      const options: IClientOptions = {
        clientId: config.mqttAuth.clientId,
        clean: true,
        connectTimeout: 4000,
        reconnectPeriod: 1000,
      }

      // Ajouter l'authentification si fournie
      if (config.mqttAuth.username) {
        options.username = config.mqttAuth.username
      }
      if (config.mqttAuth.password) {
        options.password = config.mqttAuth.password
      }

      const client = mqtt.connect(config.mqttUrl, options)
      mqttService.setClient(client)
      mqttService.setConnecting(true)

      client.on('connect', (packet: Packet) => {
        mqttService.setConnecting(false)
        dispatch(setConnected(true))
        setIsConnected(true)
        dispatch(addTestResult('✅ Connexion MQTT établie'))

        if (config.mqttAuth.username) {
          dispatch(addTestResult(`🔑 Authentifié en tant que: ${config.mqttAuth.username}`))
        }
        if (config.mqttAuth.clientId) {
          dispatch(addTestResult(`🆔 Client ID: ${config.mqttAuth.clientId}`))
        }

        // S'abonner à tous les topics
        config.topics.forEach((topic) => {
          client.subscribe(topic.value, { qos: topic.qos }, (error: Error | null) => {
            if (error) {
              dispatch(addTestResult(`❌ Erreur d'abonnement à ${topic.value}: ${error.message}`))
            } else {
              dispatch(addTestResult(`✓ Abonné à: ${topic.value} (QoS: ${topic.qos})`))
            }
          })
        })
      })

      client.on('message', (topic: string, message: Buffer, packet: Packet) => {
        dispatch(incrementMessagesReceived())
        processMqttMessage(topic, message)
      })

      client.on('close', () => {
        dispatch(setConnected(false))
        setIsConnected(false)
        dispatch(addTestResult('❌ Connexion MQTT fermée'))
      })

      client.on('error', (error: Error) => {
        dispatch(setConnectionError())
        dispatch(addTestResult(`❌ Erreur MQTT: ${error.message}`))
      })

      client.on('offline', () => {
        dispatch(setConnected(false))
        setIsConnected(false)
        dispatch(addTestResult('❌ Connexion MQTT perdue'))
      })

      client.on('reconnect', () => {
        mqttService.setConnecting(true)
        dispatch(setConnecting())
        dispatch(addTestResult('🔄 Tentative de reconnexion au broker MQTT...'))
      })

    } catch (error) {
      dispatch(setConnectionError())
      dispatch(addTestResult(`❌ Erreur de création de connexion: ${error instanceof Error ? error.message : String(error)}`))
    }
  }, [config, dispatch, processMqttMessage])

  const sendTestMessage = useCallback((testMessage: string) => {
    const client = mqttService.getClient()
    if (client && client.connected && testMessage.trim()) {
      config.topics.forEach((topic) => {
        const messageData = {
          message: testMessage,
          timestamp: new Date().toISOString(),
          station: config.stationName,
          value: Math.random() * 1000
        }

        client.publish(
          topic.value,
          JSON.stringify(messageData),
          {
            qos: topic.qos,
            retain: topic.retain
          }
        )
      })
      dispatch(incrementMessagesSent())
      dispatch(addTestResult(`📤 Envoyé: "${testMessage}" à ${config.topics.length} topics`))
    } else {
      dispatch(addTestResult('❌ Impossible d\'envoyer - connexion non établie'))
    }
  }, [config, dispatch])

  const disconnectMqtt = useCallback(() => {
    const client = mqttService.getClient()
    if (client) {
      client.end(false, () => {
        dispatch(setConnected(false))
        setIsConnected(false)
        dispatch(addTestResult('🔌 Connexion manuellement fermée'))
        mqttService.setClient(null)
      })
    } else {
      dispatch(setConnected(false))
      setIsConnected(false)
      dispatch(addTestResult('ℹ️ Aucune connexion active à fermer'))
    }
  }, [dispatch])

  // Le nettoyage est géré par le service global, pas par le composant
  // No cleanup needed here since the client is managed globally

  return {
    connectMqtt,
    sendTestMessage,
    disconnectMqtt,
    isConnected: isConnected
  }
}


/*{"station": "Station_Logbessou","timestamp": "2026-03-10T14:30:45.123Z","fuels":{"essence1":742,"essence2":318,"petrol":1562,"gazoil":843},"pumps": {"pompe1": 67,"pompe2":23,"pompe3":89,"pompe4":41},"status":"online","temperature":31.456789,"humidity":68.123456,"pressure":1015.678901,"battery":94.567890,"uptime":89123,"version":"1.2.3"}*/