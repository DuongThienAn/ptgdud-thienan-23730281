import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="profile">Profile</Link></li>
                    <li><Link to="orders">Orders</Link></li>
                    <li><Link to="settings">Settings</Link></li>
                </ul>
            </nav>

            <main style={{ flex: 1 }}>
                <h2>Bảng điều khiển (Dashboard)</h2>
                <hr />

                {/* Profile, Orders hoặc Settings hiện ra */}
                <Outlet />
            </main>
        </div>
    )
}
