// components/settings/MqttTesting.tsx
import { TestTube, Wifi, WifiOff, RefreshCw, Trash2, Play, Database, Copy, Check } from "lucide-react"
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { addTestResult, clearTestResults, resetStats, RootState } from '@/store/store'
import { useMqttActions } from '@/hooks/useMqttActions'
import mqttService from '@/services/mqttService'

interface MqttTestingProps {
  testMessage: string
  setTestMessage: (message: string) => void
}

// JSON d'exemple pour les données de la station
const EXAMPLE_JSON = {
  station: "Station_Logbessou",
  timestamp: new Date().toISOString(),
  fuels: {
    essence1: 12000,
    essence2: 8500,
    petrol: 18000,
    gazoil: 15000
  },
  pumps: {
    pompe1: 87,
    pompe2: 45,
    pompe3: 92,
    pompe4: 62
  },
  status: "online",
  temperature: 28.5,
  humidity: 65.3,
  pressure: 1013.25,
  battery: 92.5,
  uptime: 172800,
  version: "1.2.3"
}

const MqttTesting = ({ testMessage, setTestMessage }: MqttTestingProps) => {
  const dispatch = useDispatch()
  const connection = useSelector((state: RootState) => state.connection)
  const config = useSelector((state: RootState) => state.config)
  const [isCopied, setIsCopied] = useState(false)

  const { connectMqtt, sendTestMessage, disconnectMqtt } = useMqttActions()

  const testConnection = () => {
    dispatch(addTestResult('🧪 Test de connexion au broker...'))
    connectMqtt()

    setTimeout(() => {
      if (connection.isConnected) {
        sendTestMessage('Message de test de connexion')
      }
    }, 1000)
  }

  const clearTestLogs = () => {
    dispatch(clearTestResults())
    dispatch(resetStats())
  }

  // Fonction pour envoyer des données de test au format complet
  const sendTestDataMessage = () => {
    const client = mqttService.getClient()
    if (connection.isConnected && client) {
      const testData = {
        station: config.stationName,
        timestamp: new Date().toISOString(),
        fuels: {
          essence1: Math.floor(Math.random() * 1000),
          essence2: Math.floor(Math.random() * 1000),
          petrol: Math.floor(Math.random() * 2000),
          gazoil: Math.floor(Math.random() * 2000)
        },
        pumps: {
          pompe1: Math.floor(Math.random() * 100),
          pompe2: Math.floor(Math.random() * 100),
          pompe3: Math.floor(Math.random() * 100),
          pompe4: Math.floor(Math.random() * 100)
        },
        status: "online",
        temperature: 25 + Math.random() * 10,
        humidity: 40 + Math.random() * 40,
        pressure: 1000 + Math.random() * 30,
        battery: 80 + Math.random() * 20,
        uptime: 86400 + Math.floor(Math.random() * 10000),
        version: "1.2.3"
      }

      const dataTopic = `astralogic/${config.stationName}/data`
      client.publish(
        dataTopic,
        JSON.stringify(testData),
        { qos: 1, retain: false }
      )
      dispatch(addTestResult(`📤 Données test envoyées sur ${dataTopic}`))
    } else {
      dispatch(addTestResult('❌ Impossible d\'envoyer - connexion non établie'))
    }
  }

  // Fonction pour envoyer du JSON custom au topic data
  const sendCustomJsonData = () => {
    const client = mqttService.getClient()
    if (!connection.isConnected || !client) {
      dispatch(addTestResult('❌ Impossible d\'envoyer - connexion non établie'))
      return
    }

    try {
      // Valider le JSON
      const data = JSON.parse(testMessage)

      // Vérifier que c'est un objet
      if (typeof data !== 'object' || data === null) {
        dispatch(addTestResult('❌ Le JSON doit être un objet valide'))
        return
      }

      // Envoyer au topic data
      const dataTopic = `astralogic/${config.stationName}/data`
      client.publish(
        dataTopic,
        testMessage,
        { qos: 1, retain: false }
      )

      dispatch(addTestResult(`📤 JSON custom envoyé sur ${dataTopic}`))
    } catch (error) {
      dispatch(addTestResult(`❌ JSON invalide: ${error instanceof Error ? error.message : String(error)}`))
    }
  }

  // Copier l'exemple JSON dans la textbox
  const copyExampleJson = () => {
    const jsonString = JSON.stringify(EXAMPLE_JSON, null, 2)
    setTestMessage(jsonString)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
    dispatch(addTestResult('📋 Exemple JSON copié dans la textbox'))
  }

  const getConnectionStatusClass = () => {
    switch (connection.connectionStatus) {
      case 'connected': return 'bg-green-600 hover:bg-green-700'
      case 'connecting': return 'bg-yellow-600 hover:bg-yellow-700'
      case 'error': return 'bg-red-600 hover:bg-red-700'
      default: return 'bg-[#33a2e5] hover:bg-[#2b91d5]'
    }
  }

  const getConnectionIcon = () => {
    switch (connection.connectionStatus) {
      case 'connected': return <Wifi className="w-3 h-3" />
      case 'connecting': return <RefreshCw className="w-3 h-3 animate-spin" />
      case 'error': return <WifiOff className="w-3 h-3" />
      default: return <WifiOff className="w-3 h-3" />
    }
  }

  const getConnectionText = () => {
    switch (connection.connectionStatus) {
      case 'connected': return 'Connecté'
      case 'connecting': return 'Connexion...'
      case 'error': return 'Erreur'
      default: return 'Déconnecté'
    }
  }

  const formatTimestamp = (timestamp: number | null) => {
    if (!timestamp) return 'N/A'
    return new Date(timestamp).toLocaleTimeString()
  }

  return (
    <div className="bg-[#202226] rounded border border-[#2c3235] p-4">
      <h2 className="text-md font-semibold mb-3 flex items-center gap-2">
        <TestTube className="w-4 h-4" />
        Tests MQTT
      </h2>

      <div className="flex flex-wrap gap-2 mb-3">
        <button
          onClick={connectMqtt}
          className={`px-3 py-1 rounded flex items-center gap-1 text-xs ${getConnectionStatusClass()} transition-colors`}
          disabled={connection.connectionStatus === 'connecting'}
        >
          {getConnectionIcon()}
          {getConnectionText()}
        </button>

        <button
          onClick={testConnection}
          className="px-3 py-1 bg-purple-600 rounded hover:bg-purple-700 transition-colors flex items-center gap-1 text-xs"
          disabled={connection.connectionStatus === 'connecting'}
        >
          <TestTube className="w-3 h-3" />
          Tester
        </button>

        <button
          onClick={sendTestDataMessage}
          className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700 transition-colors flex items-center gap-1 text-xs"
          disabled={!connection.isConnected}
        >
          <Database className="w-3 h-3" />
          Données Test
        </button>

        <button
          onClick={disconnectMqtt}
          className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 transition-colors flex items-center gap-1 text-xs"
          disabled={!connection.isConnected}
        >
          <WifiOff className="w-3 h-3" />
          Déconnecter
        </button>

        <button
          onClick={clearTestLogs}
          className="px-3 py-1 bg-gray-600 rounded hover:bg-gray-700 transition-colors flex items-center gap-1 text-xs"
        >
          <Trash2 className="w-3 h-3" />
          Effacer
        </button>
      </div>



      {/* Zone JSON Custom - Layout 2 colonnes */}
      <div className="grid grid-cols-2 gap-3 mb-3 h-96">
        {/* Colonne gauche: JSON Editor */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-semibold text-[#8e9297]">Données JSON:</label>
            <div className="flex items-center gap-1">
              <button
                onClick={copyExampleJson}
                className={`px-2 py-1 rounded flex items-center gap-1 text-xs transition-colors ${isCopied
                  ? 'bg-green-600 text-white'
                  : 'bg-[#2c3235] text-[#8e9297] hover:bg-[#3a3f47]'
                  }`}
              >
                {isCopied ? (
                  <>
                    <Check className="w-3 h-3" />
                    Copié
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    Exemple
                  </>
                )}
              </button>
              <button
                onClick={sendCustomJsonData}
                className="px-2 py-1 bg-[#33a2e5] rounded hover:bg-[#2b91d5] transition-colors flex items-center gap-1 text-xs font-medium"
                disabled={!connection.isConnected}
              >
                <Play className="w-3 h-3" />
                Envoyer
              </button>
            </div>
          </div>
          <textarea
            value={testMessage}
            onChange={(e) => setTestMessage(e.target.value)}
            className="flex-1 bg-[#2c3235] border border-[#3a3f47] rounded px-2 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#33a2e5] font-mono resize-none"
            placeholder="Collez votre JSON ici..."
            disabled={!connection.isConnected}
          />
        </div>

        {/* Colonne droite: Terminal d'activité du broker */}
        <div className="flex flex-col bg-black border-2 border-[#33a2e5] rounded">
          <div className="bg-[#1a1a1a] px-3 py-2 border-b border-[#33a2e5] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${connection.isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
              <span className="text-xs font-mono font-bold text-[#33a2e5]">BROKER ACTIVITY</span>
            </div>
            <button
              onClick={clearTestLogs}
              className="text-[10px] text-[#8e9297] hover:text-[#c7d0d9] transition-colors"
            >
              <Trash2 className="w-3 h-3" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto bg-black p-2 font-mono text-[10px] space-y-0">
            {connection.testResults.length === 0 ? (
              <div className="text-[#555555]">&gt; Connectez-vous au broker pour voir l&apos;activité...</div>
            ) : (
              connection.testResults.map((result, index) => (
                <div key={index} className="text-[#00ff00] break-words">
                  <span className="text-[#666666]">&gt;</span> {result}
                </div>
              ))
            )}
            {connection.testResults.length > 0 && (
              <div className="text-[#33a2e5]">&gt; _</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MqttTesting