package router

import (
	"github.com/cryptobranchoidea/fisap/pkg/web/handler"
	"github.com/gofiber/fiber/v2"
)

func HealthRouter(app *fiber.App) {
	app.Get("/health", handler.HealthHandler)
}
