//package com.nitesh.apigateway.Security;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.cloud.gateway.filter.GatewayFilterChain;
//import org.springframework.cloud.gateway.filter.GlobalFilter;
//import org.springframework.core.Ordered;
//import org.springframework.http.HttpHeaders;
//import org.springframework.stereotype.Component;
//import org.springframework.web.server.ServerWebExchange;
//import reactor.core.publisher.Mono;
//
//@Component
//public class JwtAuthFilter implements GlobalFilter, Ordered {
//
//    @Autowired
//    private JwtUtil jwtUtil;
//
//    @Override
//    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
//        String authHeader = exchange.getRequest().getHeaders().getFirst(HttpHeaders.AUTHORIZATION);
//
//        if (authHeader != null && authHeader.startsWith("Bearer ")) {
//            String token = authHeader.substring(7);
//            try {
//                String username = jwtUtil.extractUsername(token);
//                if (username != null && jwtUtil.validateToken(token, username)) {
//                    // Token is valid – you can add headers or context here if needed
//                } else {
//                    exchange.getResponse().setStatusCode(org.springframework.http.HttpStatus.UNAUTHORIZED);
//                    return exchange.getResponse().setComplete();
//                }
//            } catch (Exception e) {
//                exchange.getResponse().setStatusCode(org.springframework.http.HttpStatus.UNAUTHORIZED);
//                return exchange.getResponse().setComplete();
//            }
//        } else {
//            // Block all requests except those explicitly allowed in config
//            exchange.getResponse().setStatusCode(org.springframework.http.HttpStatus.UNAUTHORIZED);
//            return exchange.getResponse().setComplete();
//        }
//
//        return chain.filter(exchange);
//    }
//
//    @Override
//    public int getOrder() {
//        return -1; // Highest precedence
//    }
//}
