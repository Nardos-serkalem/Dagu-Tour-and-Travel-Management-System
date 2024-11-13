import { useState } from 'react';
import { User, Camera, CreditCard, Bell, Globe, Lock } from 'lucide-react';
import type { User as UserType } from '../../types';

const tabs = [
  { id: 'personal', label: 'Personal Info', icon: User },
  { id: 'bookings', label: 'Bookings', icon: CreditCard },
  { id: 'favorites', label: 'Saved Tours', icon: Bell },
  { id: 'preferences', label: 'Preferences', icon: Globe },
  { id: 'security', label: 'Security', icon: Lock },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('personal');
  const [user, setUser] = useState<UserType>({
    id: '1',
    name: 'Nardos Serkalem',
    email: 'nardival08@gmail.com',
    avatar: 'Travel pictures/pictures/photo_2024-04-25_00-28-16.jpg',
    preferences: {
      language: 'Am',
      currency: 'ET birr',
      notifications: {
        email: true,
        push: true,
        sms: false,
      },
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
            <div className="text-center">
              <div className="relative inline-block">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md hover:bg-gray-50">
                  <Camera className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <h2 className="mt-4 text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>

            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-2 text-sm rounded-lg ${
                      activeTab === tab.id
                        ? 'bg-teal-50 text-teal-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm p-6">
            {activeTab === 'personal' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      value={user.name}
                      onChange={(e) => setUser({ ...user, name: e.target.value })}
                      className="mt-1 input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      value={user.email}
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                      className="mt-1 input"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="btn btn-primary">Save Changes</button>
                </div>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Preferences</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Language</label>
                    <select
                      value={user.preferences?.language}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          preferences: { ...user.preferences!, language: e.target.value },
                        })
                      }
                      className="mt-1 input"
                    >
                      <option value="am">Amharic</option>
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Currency</label>
                    <select
                      value={user.preferences?.currency}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          preferences: { ...user.preferences!, currency: e.target.value },
                        })
                      }
                      className="mt-1 input"
                    >
                      <option value="ET birr">ET birr (B)</option>
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                    </select>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Notifications</h4>
                    <div className="space-y-2">
                      {Object.entries(user.preferences?.notifications || {}).map(([key, value]) => (
                        <label key={key} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={value}
                            onChange={(e) =>
                              setUser({
                                ...user,
                                preferences: {
                                  ...user.preferences!,
                                  notifications: {
                                    ...user.preferences!.notifications,
                                    [key]: e.target.checked,
                                  },
                                },
                              })
                            }
                            className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                          />
                          <span className="ml-2 text-gray-700 capitalize">{key} notifications</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="btn btn-primary">Save Preferences</button>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Security Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Current Password</label>
                    <input type="password" className="mt-1 input" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">New Password</label>
                    <input type="password" className="mt-1 input" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input type="password" className="mt-1 input" />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="btn btn-primary">Update Password</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}