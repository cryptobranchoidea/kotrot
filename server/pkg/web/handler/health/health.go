package health

import "github.com/gofiber/fiber/v2"

func HealthHandler(c *fiber.Ctx) error {
	return c.SendString("OK")
}
