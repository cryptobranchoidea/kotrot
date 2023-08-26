package health

import "github.com/gofiber/fiber/v2"

// Health godoc
// @Description  health check
// @Tags         health
// @Success      200  {string} string "ok"
// @Router       /health [get]
func HealthHandler(c *fiber.Ctx) error {
	return c.SendString("OK")
}
