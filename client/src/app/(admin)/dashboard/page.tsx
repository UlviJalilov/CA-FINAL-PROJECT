'use client';

import CarAdminPanel from '@/admin/carProducts/CarAdminPanel';
import FeaturedAdminPanel from '@/admin/featuredProducts/FeaturedAdminPanel';
import React from 'react';

const AdminDashboardPage = () => {
  return (
    <div>
     <FeaturedAdminPanel />
     <CarAdminPanel />
    </div>
  );
};

export default AdminDashboardPage;
