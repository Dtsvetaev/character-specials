/**
 * Извлекает массив с вариантами атак персонажа, добавляя описание по умолчанию, если оно отсутствует.
 * @param {Object} character - Объект персонажа с информацией об атаках.
 * @returns {Array} Массив объектов с полями id, name, icon и description.
 */
export function getSpecialAttacks({ special }) {
    return special.map(({ id, name, icon, description = 'Описание недоступно' }) => ({
      id,
      name,
      icon,
      description,
    }));
  }
  

  