// تكوين ثوابت لوحة التحكم
export const DASHBOARD_CONFIG = {
  // معلومات التطبيق
  APP_NAME: 'Qatar Tech Hub',
  APP_VERSION: '1.0.0',
  APP_DESCRIPTION: 'منصة قطرية تقنية رائدة',

  // إعدادات المصادقة
  AUTH: {
    SESSION_TIMEOUT: 30 * 60 * 1000, // 30 دقيقة
    MAX_LOGIN_ATTEMPTS: 5,
    LOCKOUT_DURATION: 15 * 60 * 1000, // 15 دقيقة
  },

  // إعدادات الأمان
  SECURITY: {
    ENABLE_2FA: true,
    ENABLE_AUDIT_LOG: true,
    ENABLE_ENCRYPTION: true,
    PASSWORD_MIN_LENGTH: 8,
    PASSWORD_REQUIRE_UPPERCASE: true,
    PASSWORD_REQUIRE_LOWERCASE: true,
    PASSWORD_REQUIRE_NUMBER: true,
    PASSWORD_REQUIRE_SPECIAL: true,
  },

  // إعدادات الواجهة
  UI: {
    DEFAULT_THEME: 'dark',
    DEFAULT_LANGUAGE: 'ar',
    SIDEBAR_DEFAULT_OPEN: true,
    ENABLE_ANIMATIONS: true,
    DEFAULT_PAGE_SIZE: 10,
  },

  // إعدادات الإشعارات
  NOTIFICATIONS: {
    ENABLE_EMAIL: true,
    ENABLE_PUSH: true,
    ENABLE_IN_APP: true,
    AUTO_DISMISS_TIMEOUT: 5000, // 5 ثواني
  },

  // المسارات
  ROUTES: {
    HOME: '/',
    LOGIN: '/login',
    DASHBOARD: '/dashboard',
    USERS: '/dashboard/users',
    CONTENT: '/dashboard/content',
    ANALYTICS: '/dashboard/analytics',
    SETTINGS: '/dashboard/settings',
  },

  // الألوان المتاحة
  THEME_COLORS: {
    cyan: {
      primary: '#06b6d4',
      hover: '#0891b2',
    },
    purple: {
      primary: '#a855f7',
      hover: '#9333ea',
    },
    blue: {
      primary: '#3b82f6',
      hover: '#2563eb',
    },
    green: {
      primary: '#10b981',
      hover: '#059669',
    },
    red: {
      primary: '#ef4444',
      hover: '#dc2626',
    },
  },

  // حدود التطبيق
  LIMITS: {
    MAX_FILE_SIZE: 10 * 1024 * 1024, // 10 MB
    MAX_USERS_PER_PAGE: 50,
    MAX_CONTENT_ITEMS_PER_PAGE: 20,
    MAX_SEARCH_RESULTS: 100,
  },

  // تنسيقات البيانات
  FORMATS: {
    DATE: 'DD/MM/YYYY',
    TIME: 'HH:mm:ss',
    DATETIME: 'DD/MM/YYYY HH:mm',
    CURRENCY: 'QAR',
  },

  // وسائل التواصل الاجتماعي
  SOCIAL: {
    TWITTER: 'https://twitter.com/qatartechhub',
    LINKEDIN: 'https://linkedin.com/company/qatartechhub',
    GITHUB: 'https://github.com/qatartechhub',
    EMAIL: 'info@qatartechhub.com',
  },
};

export default DASHBOARD_CONFIG;
