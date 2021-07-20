const getStatus = daysLeft => {
  switch (true) {
    case daysLeft > 10:
      return 'Ну круто, круто.';
    case daysLeft > 5:
      return 'good';
    default:
      return 'Найс)';
  }
};

export const getShareMessage = dateDifference => {
  const {days, hours} = dateDifference;

  const status = getStatus(days);

  let message = `${status}\n`;

  if (days) {
    message += `До зарплаты осталось ${days} дней`;

    if (hours) {
      message += ` и ${hours} часов.`;
    } else {
      message += '.';
    }
  } else {
    message += `ДО ЗП ${hours} часов!!`;
  }

  return message;
};
