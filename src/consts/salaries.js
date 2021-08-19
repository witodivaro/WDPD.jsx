import {getCurrentDayPart} from './time';

export const SALARIES = {
  Kirill: 550,
  Alex: 604,
  Wito: 508,
};

const getAlexSalaryGreeting = () => {
  switch (getCurrentDayPart()) {
    case 'morning':
      return 'Доброе утро, Алексей. Так рано встали?';
    case 'afternoon':
      return 'Добрый день, Алексей. Только встали?';
    case 'evening':
      return 'Добрый вечер, Алексей. Самое время для того, чтобы проснуться!';
  }
};

export const SALARY_GREETINGS = {
  550: 'Приложение WITO DIVARO PAYDAY приветствует Вас, Кирилл.',
  604: getAlexSalaryGreeting(),
  508: 'witodivarobigpenis2003',
};
