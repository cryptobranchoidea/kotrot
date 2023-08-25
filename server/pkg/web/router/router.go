package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

type Router struct {
	app *fiber.App
}

func NewRouter() *Router {
	app := fiber.New()
	app.Use(cors.New(
		cors.Config{
			AllowOrigins:     "http://localhost:3000",
			AllowHeaders:     "Access-Control-Allow-Credentials,Access-Control-Allow-Headers,Access-Control-Allow-Origin,Content-Type,Content-Length,Accept-Encoding,Authorization",
			AllowCredentials: true,
		},
	))
	return &Router{app: app}
}

func (r *Router) Serve() {
	err := r.app.Listen(":8080")
	if err != nil {
		panic(err)
	}
}
