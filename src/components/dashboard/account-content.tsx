import { User, Mail, Phone, MapPin, Lock, Bell, Shield, Download, Upload } from 'lucide-react';
import { useState } from 'react';

export default function AccountContent() {
  const [userData, setUserData] = useState({
    firstName: 'Diletta',
    lastName: 'Mbouobouo',
    email: 'diletta.mbouobouo@dacmir.com',
    phone: '+237 6 99 88 77 66',
    position: 'Administrateur Système',
    department: 'IT & Digitalisation',
    location: 'Douala, Cameroun',
    language: 'fr',
    notifications: {
      email: true,
      sms: false,
      push: true,
      security: true
    },
    privacy: {
      profileVisible: true,
      activityStatus: true,
      dataCollection: false
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  const handleInputChange = (field: string, value: string) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNotificationChange = (type: string, checked: boolean) => {
    setUserData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: checked
      }
    }));
  };

  const handlePrivacyChange = (type: string, checked: boolean) => {
    setUserData(prev => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [type]: checked
      }
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Ici vous ajouteriez l'appel API pour sauvegarder les données
    console.log('Données sauvegardées:', userData);
  };

  const exportData = () => {
    // Fonction pour exporter les données
    console.log('Export des données');
  };

  return (
    <div className="h-full bg-[#202226] p-6 overflow-auto">
      <div className="max-w-4xl mx-auto">
        {/* En-tête */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Mon Compte</h1>
            <p className="text-[#8e9297]">Gérez vos informations personnelles et vos préférences</p>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-[#58b3ea] text-white rounded hover:bg-[#4ca1d4] transition-colors"
          >
            {isEditing ? 'Annuler' : 'Modifier le profil'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Navigation latérale */}
          <div className="lg:col-span-1">
            <div className="bg-[#2a2d32] rounded-lg p-4 border border-[#2c3235]">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-3 py-2 rounded transition-colors ${
                    activeTab === 'profile' 
                      ? 'bg-[#58b3ea] text-white' 
                      : 'text-[#8e9297] hover:bg-[#32353b]'
                  }`}
                >
                  <User className="w-4 h-4 inline mr-2" />
                  Profil
                </button>
                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`w-full text-left px-3 py-2 rounded transition-colors ${
                    activeTab === 'notifications' 
                      ? 'bg-[#58b3ea] text-white' 
                      : 'text-[#8e9297] hover:bg-[#32353b]'
                  }`}
                >
                  <Bell className="w-4 h-4 inline mr-2" />
                  Notifications
                </button>
                <button
                  onClick={() => setActiveTab('security')}
                  className={`w-full text-left px-3 py-2 rounded transition-colors ${
                    activeTab === 'security' 
                      ? 'bg-[#58b3ea] text-white' 
                      : 'text-[#8e9297] hover:bg-[#32353b]'
                  }`}
                >
                  <Shield className="w-4 h-4 inline mr-2" />
                  Sécurité
                </button>
                <button
                  onClick={() => setActiveTab('privacy')}
                  className={`w-full text-left px-3 py-2 rounded transition-colors ${
                    activeTab === 'privacy' 
                      ? 'bg-[#58b3ea] text-white' 
                      : 'text-[#8e9297] hover:bg-[#32353b]'
                  }`}
                >
                  <Lock className="w-4 h-4 inline mr-2" />
                  Confidentialité
                </button>
              </nav>

              {/* Actions rapides */}
              <div className="mt-8 pt-6 border-t border-[#2c3235]">
                <h3 className="text-sm font-semibold text-white mb-3">Actions</h3>
                <div className="space-y-2">
                  <button
                    onClick={exportData}
                    className="w-full text-left px-3 py-2 text-[#8e9297] hover:bg-[#32353b] rounded transition-colors flex items-center"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Exporter mes données
                  </button>
                  <button className="w-full text-left px-3 py-2 text-[#8e9297] hover:bg-[#32353b] rounded transition-colors flex items-center">
                    <Upload className="w-4 h-4 mr-2" />
                    Changer de photo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <div className="bg-[#2a2d32] rounded-lg p-6 border border-[#2c3235]">
                <h2 className="text-xl font-semibold text-white mb-6">Informations du profil</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#8e9297] mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      value={userData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      disabled={!isEditing}
                      className="w-full bg-[#202226] border border-[#2c3235] rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#58b3ea] disabled:opacity-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#8e9297] mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      value={userData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      disabled={!isEditing}
                      className="w-full bg-[#202226] border border-[#2c3235] rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#58b3ea] disabled:opacity-50"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-[#8e9297] mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      value={userData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      disabled={!isEditing}
                      className="w-full bg-[#202226] border border-[#2c3235] rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#58b3ea] disabled:opacity-50"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-[#8e9297] mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={userData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      disabled={!isEditing}
                      className="w-full bg-[#202226] border border-[#2c3235] rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#58b3ea] disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#8e9297] mb-2">
                      Poste
                    </label>
                    <input
                      type="text"
                      value={userData.position}
                      onChange={(e) => handleInputChange('position', e.target.value)}
                      disabled={!isEditing}
                      className="w-full bg-[#202226] border border-[#2c3235] rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#58b3ea] disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#8e9297] mb-2">
                      Département
                    </label>
                    <input
                      type="text"
                      value={userData.department}
                      onChange={(e) => handleInputChange('department', e.target.value)}
                      disabled={!isEditing}
                      className="w-full bg-[#202226] border border-[#2c3235] rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#58b3ea] disabled:opacity-50"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-[#8e9297] mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Localisation
                    </label>
                    <input
                      type="text"
                      value={userData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      disabled={!isEditing}
                      className="w-full bg-[#202226] border border-[#2c3235] rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#58b3ea] disabled:opacity-50"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-[#8e9297] mb-2">
                      Langue
                    </label>
                    <select
                      value={userData.language}
                      onChange={(e) => handleInputChange('language', e.target.value)}
                      disabled={!isEditing}
                      className="w-full bg-[#202226] border border-[#2c3235] rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#58b3ea] disabled:opacity-50"
                    >
                      <option value="fr">Français</option>
                      <option value="en">English</option>
                    </select>
                  </div>
                </div>

                {isEditing && (
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={handleSave}
                      className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                    >
                      Sauvegarder
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="bg-[#2a2d32] rounded-lg p-6 border border-[#2c3235]">
                <h2 className="text-xl font-semibold text-white mb-6">Préférences de notifications</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-[#202226] rounded border border-[#2c3235]">
                    <div>
                      <h3 className="text-white font-medium">Notifications par email</h3>
                      <p className="text-[#8e9297] text-sm">Recevoir les alertes par email</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={userData.notifications.email}
                        onChange={(e) => handleNotificationChange('email', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#58b3ea]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#202226] rounded border border-[#2c3235]">
                    <div>
                      <h3 className="text-white font-medium">Notifications SMS</h3>
                      <p className="text-[#8e9297] text-sm">Recevoir les alertes par SMS</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={userData.notifications.sms}
                        onChange={(e) => handleNotificationChange('sms', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#58b3ea]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#202226] rounded border border-[#2c3235]">
                    <div>
                      <h3 className="text-white font-medium">Notifications push</h3>
                      <p className="text-[#8e9297] text-sm">Recevoir les notifications push</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={userData.notifications.push}
                        onChange={(e) => handleNotificationChange('push', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#58b3ea]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#202226] rounded border border-[#2c3235]">
                    <div>
                      <h3 className="text-white font-medium">Alertes de sécurité</h3>
                      <p className="text-[#8e9297] text-sm">Recevoir les alertes de sécurité</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={userData.notifications.security}
                        onChange={(e) => handleNotificationChange('security', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#58b3ea]"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="bg-[#2a2d32] rounded-lg p-6 border border-[#2c3235]">
                <h2 className="text-xl font-semibold text-white mb-6">Paramètres de confidentialité</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-[#202226] rounded border border-[#2c3235]">
                    <div>
                      <h3 className="text-white font-medium">Profil visible</h3>
                      <p className="text-[#8e9297] text-sm">Rendre votre profil visible aux autres utilisateurs</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={userData.privacy.profileVisible}
                        onChange={(e) => handlePrivacyChange('profileVisible', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#58b3ea]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#202226] rounded border border-[#2c3235]">
                    <div>
                      <h3 className="text-white font-medium">Statut d&apos;activité</h3>
                      <p className="text-[#8e9297] text-sm">Afficher votre statut en ligne</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={userData.privacy.activityStatus}
                        onChange={(e) => handlePrivacyChange('activityStatus', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#58b3ea]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#202226] rounded border border-[#2c3235]">
                    <div>
                      <h3 className="text-white font-medium">Collecte de données</h3>
                      <p className="text-[#8e9297] text-sm">Autoriser la collecte de données d&apos;usage</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={userData.privacy.dataCollection}
                        onChange={(e) => handlePrivacyChange('dataCollection', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#58b3ea]"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="bg-[#2a2d32] rounded-lg p-6 border border-[#2c3235]">
                <h2 className="text-xl font-semibold text-white mb-6">Sécurité du compte</h2>
                
                <div className="space-y-6">
                  <div className="p-4 bg-[#202226] rounded border border-[#2c3235]">
                    <h3 className="text-white font-medium mb-2">Changer le mot de passe</h3>
                    <p className="text-[#8e9297] text-sm mb-4">Mettez à jour votre mot de passe régulièrement</p>
                    <button className="px-4 py-2 bg-[#58b3ea] text-white rounded hover:bg-[#4ca1d4] transition-colors">
                      Changer le mot de passe
                    </button>
                  </div>

                  <div className="p-4 bg-[#202226] rounded border border-[#2c3235]">
                    <h3 className="text-white font-medium mb-2">Authentification à deux facteurs</h3>
                    <p className="text-[#8e9297] text-sm mb-4">Ajoutez une couche de sécurité supplémentaire</p>
                    <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors">
                      Activer 2FA
                    </button>
                  </div>

                  <div className="p-4 bg-[#202226] rounded border border-[#2c3235]">
                    <h3 className="text-white font-medium mb-2">Sessions actives</h3>
                    <p className="text-[#8e9297] text-sm mb-4">Gérez vos sessions connectées</p>
                    <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors">
                      Voir les sessions
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}