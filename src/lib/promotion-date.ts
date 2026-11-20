const promotionDateFormatter = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "America/Sao_Paulo",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

export const getPromotionDate = (now: Date = new Date()): string =>
  promotionDateFormatter.format(now);