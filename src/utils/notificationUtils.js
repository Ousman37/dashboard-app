//utils/notificationUtils.js

export const generateNotificationMessage = (type, data) => {
  switch (type) {
    case "subscriptionReminder":
      return `Action Required: Your subscription is expiring in ${data.daysLeft} days. Renew now to avoid interruption.`;
    case "promotionalOffer":
      return `Enjoy ${data.discount} off on your next purchase with code ${data.code}. Offer ends ${data.endDate}!`;
    case "achievementAcknowledgment":
      return `Great job on reaching your step goal ${data.daysInRow} days in a row!`;
    case "appointmentReminder":
      return `Reminder: Your appointment with ${data.doctorName} is ${data.appointmentDate} at ${data.appointmentTime}.`;
    case "levelAchievement":
      return `Congratulations! You’ve just reached Level ${data.level}. Your dedication is impressive!`;
    case "feedbackThankYou":
      return `Thanks for your feedback, ${data.userName}! We appreciate your input and are always working to improve.`;
    default:
      return "You have a new notification!";
  }
};
