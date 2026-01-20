import { useAuth } from '@/contexts/AuthContext';
import { Permission } from '@/lib/permissions';

export const usePermissions = () => {
  const { hasPermission } = useAuth();

  const checkPermission = (permission: Permission): boolean => {
    return hasPermission(permission);
  };

  const checkPermissions = (permissions: Permission[]): boolean => {
    return permissions.every(permission => hasPermission(permission));
  };

  const checkAnyPermission = (permissions: Permission[]): boolean => {
    return permissions.some(permission => hasPermission(permission));
  };

  return {
    checkPermission,
    checkPermissions,
    checkAnyPermission,
  };
};
