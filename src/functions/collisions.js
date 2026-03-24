export const checkCollision = (entity1, entity2) => {
  const distance = Math.sqrt(
    (entity2.x - entity1.x) ** 2 + (entity2.y - entity1.y) ** 2,
  );
  return distance <= entity1.radius + entity2.radius;
};
