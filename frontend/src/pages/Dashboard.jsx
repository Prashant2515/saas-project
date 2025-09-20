import React, { useState, useEffect } from 'react';
import { tenantAPI, accountAPI } from '../services/api';

function Dashboard({ onLogout }) {
  const [user, setUser] = useState(null);
  const [clients, setClients] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get user from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }

    // Load data
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [clientsResponse, accountsResponse] = await Promise.all([
        tenantAPI.getClients(),
        accountAPI.getAccounts()
      ]);
      
      setClients(clientsResponse.data.results || clientsResponse.data);
      setAccounts(accountsResponse.data.results || accountsResponse.data);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    onLogout();
  };

  if (loading) {
    return (
      <div className="container" style={{ padding: '50px', textAlign: 'center' }}>
        <h2>Loading dashboard...</h2>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <header style={{ 
        backgroundColor: '#3b82f6', 
        color: 'white', 
        padding: '20px 0',
        marginBottom: '30px'
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1>SaaS Dashboard</h1>
          <div>
            <span>Welcome, {user?.username}</span>
            <button 
              onClick={handleLogout}
              className="btn btn-secondary"
              style={{ marginLeft: '20px' }}
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="container">
        {/* Stats Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '20px',
          marginBottom: '40px'
        }}>
          <div className="card">
            <h3>Total Clients</h3>
            <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#3b82f6' }}>
              {clients.length}
            </div>
          </div>
          
          <div className="card">
            <h3>Total Accounts</h3>
            <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#10b981' }}>
              {accounts.length}
            </div>
          </div>
          
          <div className="card">
            <h3>Active User</h3>
            <div style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#6b7280' }}>
              {user?.email || 'N/A'}
            </div>
          </div>
        </div>

        {/* Recent Clients */}
        <div className="card" style={{ marginBottom: '30px' }}>
          <h3>Recent Clients</h3>
          {clients.length > 0 ? (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', marginTop: '20px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                    <th style={{ textAlign: 'left', padding: '10px' }}>Name</th>
                    <th style={{ textAlign: 'left', padding: '10px' }}>Schema</th>
                    <th style={{ textAlign: 'left', padding: '10px' }}>Status</th>
                    <th style={{ textAlign: 'left', padding: '10px' }}>Created</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.slice(0, 5).map((client) => (
                    <tr key={client.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                      <td style={{ padding: '10px' }}>{client.name}</td>
                      <td style={{ padding: '10px' }}>{client.schema_name}</td>
                      <td style={{ padding: '10px' }}>
                        <span style={{ 
                          padding: '4px 8px',
                          borderRadius: '4px',
                          backgroundColor: client.is_active ? '#dcfce7' : '#fee2e2',
                          color: client.is_active ? '#166534' : '#dc2626',
                          fontSize: '0.8em'
                        }}>
                          {client.is_active ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td style={{ padding: '10px' }}>
                        {new Date(client.created_on).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p style={{ color: '#6b7280' }}>No clients found. Create your first client!</p>
          )}
        </div>

        {/* Recent Accounts */}
        <div className="card">
          <h3>Recent Accounts</h3>
          {accounts.length > 0 ? (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', marginTop: '20px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                    <th style={{ textAlign: 'left', padding: '10px' }}>Name</th>
                    <th style={{ textAlign: 'left', padding: '10px' }}>Email</th>
                    <th style={{ textAlign: 'left', padding: '10px' }}>Created By</th>
                    <th style={{ textAlign: 'left', padding: '10px' }}>Created</th>
                  </tr>
                </thead>
                <tbody>
                  {accounts.slice(0, 5).map((account) => (
                    <tr key={account.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                      <td style={{ padding: '10px' }}>{account.name}</td>
                      <td style={{ padding: '10px' }}>{account.email}</td>
                      <td style={{ padding: '10px' }}>{account.created_by?.username}</td>
                      <td style={{ padding: '10px' }}>
                        {new Date(account.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p style={{ color: '#6b7280' }}>No accounts found. Create your first account!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
