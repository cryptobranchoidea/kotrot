package router

import (
	_ "github.com/cryptobranchoidea/kotrot/docs"
	"github.com/gofiber/swagger"
)

func (r *Router) SwaggerRouter() {
	r.app.Get("/swagger/*", swagger.HandlerDefault)
}
