package router

import (
	"github.com/cryptobranchoidea/fisap/pkg/web/handler/health"
)

func (r *Router) HealthRouter() {
	r.app.Get("/health", health.HealthHandler)
}
