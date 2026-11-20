import { describe, expect, it } from "vitest";
import { getPromotionDate } from "../lib/promotion-date";

describe("Data da oferta no horário de Brasília", () => {
  it("exibe dia 20 em 20 de novembro, sem adiantar para 21", () => {
    expect(getPromotionDate(new Date("2026-11-20T18:34:00Z"))).toBe("20/11/2026");
  });

  it("mantém dia 20 enquanto ainda não virou meia-noite em Brasília", () => {
    expect(getPromotionDate(new Date("2026-11-21T02:59:59Z"))).toBe("20/11/2026");
  });

  it("atualiza para dia 21 à meia-noite em Brasília", () => {
    expect(getPromotionDate(new Date("2026-11-21T03:00:00Z"))).toBe("21/11/2026");
  });
});