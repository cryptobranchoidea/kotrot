package router

import (
	_ "github.com/cryptobranchoidea/fisap/docs"
	"github.com/gofiber/swagger"
)

func (r *Router) SwaggerRouter() {
	r.app.Get("/swagger/*", swagger.HandlerDefault)
}
