import React, { useState, useEffect, createContext, useContext } from 'react';
import { X, CheckCircle, AlertCircle, Info, Heart, Download, Share2 } from 'lucide-react';

const NotificationContext = createContext();

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within NotificationProvider');
  }
  return context;
};

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (notification) => {
    const id = Date.now() + Math.random();
    const newNotification = {
      id,
      type: 'info',
      duration: 4000,
      ...notification
    };

    setNotifications(prev => [...prev, newNotification]);

    // Auto remove
    if (newNotification.duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, newNotification.duration);
    }

    return id;
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const showSuccess = (message, title = 'نجح!') => {
    return addNotification({
      type: 'success',
      title,
      message,
      icon: CheckCircle
    });
  };

  const showError = (message, title = 'خطأ!') => {
    return addNotification({
      type: 'error',
      title,
      message,
      icon: AlertCircle,
      duration: 6000
    });
  };

  const showInfo = (message, title = 'معلومة') => {
    return addNotification({
      type: 'info',
      title,
      message,
      icon: Info
    });
  };

  const showCustom = (config) => {
    return addNotification(config);
  };

  return (
    <NotificationContext.Provider value={{
      notifications,
      addNotification,
      removeNotification,
      showSuccess,
      showError,
      showInfo,
      showCustom
    }}>
      {children}
      <NotificationContainer notifications={notifications} onRemove={removeNotification} />
    </NotificationContext.Provider>
  );
};

const NotificationContainer = ({ notifications, onRemove }) => {
  return (
    <div className="fixed top-4 left-4 z-50 space-y-2 max-w-sm">
      {notifications.map(notification => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onRemove={() => onRemove(notification.id)}
        />
      ))}
    </div>
  );
};

const NotificationItem = ({ notification, onRemove }) => {
  const [isLeaving, setIsLeaving] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (notification.duration > 0) {
      const interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev - (100 / (notification.duration / 100));
          if (newProgress <= 0) {
            clearInterval(interval);
            return 0;
          }
          return newProgress;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [notification.duration]);

  const handleRemove = () => {
    setIsLeaving(true);
    setTimeout(onRemove, 300);
  };

  const getTypeStyles = () => {
    switch (notification.type) {
      case 'success':
        return {
          bg: 'bg-gradient-to-r from-green-500 to-emerald-600',
          text: 'text-white',
          icon: 'text-white'
        };
      case 'error':
        return {
          bg: 'bg-gradient-to-r from-red-500 to-rose-600',
          text: 'text-white',
          icon: 'text-white'
        };
      case 'warning':
        return {
          bg: 'bg-gradient-to-r from-yellow-500 to-orange-600',
          text: 'text-white',
          icon: 'text-white'
        };
      case 'favorite':
        return {
          bg: 'bg-gradient-to-r from-pink-500 to-rose-600',
          text: 'text-white',
          icon: 'text-white'
        };
      case 'export':
        return {
          bg: 'bg-gradient-to-r from-blue-500 to-indigo-600',
          text: 'text-white',
          icon: 'text-white'
        };
      default:
        return {
          bg: 'bg-white/95',
          text: 'text-slate-800',
          icon: 'text-blue-600'
        };
    }
  };

  const styles = getTypeStyles();
  const IconComponent = notification.icon || Info;

  return (
    <div
      className={`
        ${styles.bg} ${styles.text}
        backdrop-blur-sm rounded-xl shadow-2xl border border-white/20
        p-4 min-w-80 max-w-sm
        transform transition-all duration-300 ease-out
        ${isLeaving ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'}
        hover:scale-105
      `}
    >
      <div className="flex items-start gap-3">
        <div className={`${styles.icon} flex-shrink-0 mt-0.5`}>
          <IconComponent className="w-5 h-5" />
        </div>
        
        <div className="flex-1 min-w-0">
          {notification.title && (
            <h4 className="font-bold text-sm mb-1 truncate">
              {notification.title}
            </h4>
          )}
          {notification.message && (
            <p className="text-sm opacity-90 leading-relaxed">
              {notification.message}
            </p>
          )}
          
          {notification.action && (
            <button
              onClick={notification.action.onClick}
              className="mt-2 text-sm underline hover:no-underline opacity-80 hover:opacity-100"
            >
              {notification.action.label}
            </button>
          )}
        </div>
        
        <button
          onClick={handleRemove}
          className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity p-1 -m-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      {/* Progress bar */}
      {notification.duration > 0 && (
        <div className="mt-3 -mx-4 -mb-4">
          <div className="h-1 bg-black/10 overflow-hidden rounded-b-xl">
            <div 
              className="h-full bg-white/30 transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

// Enhanced notification hooks for specific actions
export const useCardNotifications = () => {
  const { showCustom, showSuccess, showInfo } = useNotification();

  const notifyCardView = (cardNumber) => {
    showInfo(`تم عرض البطاقة رقم ${cardNumber}`, '👁️ مشاهدة');
  };

  const notifyCardFavorite = (cardNumber, isFavorite) => {
    showCustom({
      type: 'favorite',
      title: isFavorite ? '❤️ تمت الإضافة للمفضلة' : '💔 تم الحذف من المفضلة',
      message: `البطاقة رقم ${cardNumber}`,
      icon: Heart,
      duration: 2000
    });
  };

  const notifyCardExport = (cardNumber) => {
    showCustom({
      type: 'export',
      title: '📦 جاري التصدير...',
      message: `البطاقة رقم ${cardNumber} - HTML`,
      icon: Download,
      duration: 3000
    });
  };

  const notifyCardShare = (cardNumber) => {
    showSuccess(`تم مشاركة البطاقة رقم ${cardNumber}`, '🔗 مشاركة');
  };

  const notifySearchResult = (count) => {
    showInfo(`تم العثور على ${count} بطاقة`, '🔍 نتائج البحث');
  };

  return {
    notifyCardView,
    notifyCardFavorite,
    notifyCardExport,
    notifyCardShare,
    notifySearchResult
  };
};

export default NotificationProvider;