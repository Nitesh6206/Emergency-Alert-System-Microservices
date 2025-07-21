//package com.nitesh.apigateway.Security;
//
//import io.jsonwebtoken.Claims;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.security.Keys;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Component;
//
//import javax.crypto.SecretKey;
//import java.nio.charset.StandardCharsets;
//import java.util.Date;
//import java.util.function.Function;
//import java.util.UUID;
//
//@Component
//public class JwtUtil {
//
//    @Value("${security.jwt.secret}")
//    private String SECRET_KEY;
//
//
//    @Value("${security.jwt.expiration:3600000}")
//    private long EXPIRATION_TIME;
//
//    @Value("${security.jwt.refresh.expiration:604800000}")
//    private long REFRESH_TOKEN_EXPIRATION;
//
//    private SecretKey getSecretKey() {
//        byte[] keyBytes = SECRET_KEY.getBytes(StandardCharsets.UTF_8);
//        if (keyBytes.length < 32) {
//            throw new IllegalArgumentException("JWT Secret Key must be at least 32 bytes for HS256");
//        }
//        return Keys.hmacShaKeyFor(keyBytes);
//    }
//
//    public String extractUsername(String token) {
//        return extractClaim(token, Claims::getSubject);
//    }
//
//    public Date extractExpiration(String token) {
//        return extractClaim(token, Claims::getExpiration);
//    }
//
//    private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
//        final Claims claims = extractAllClaims(token);
//        return claimsResolver.apply(claims);
//    }
//
//    private Claims extractAllClaims(String token) {
//        try {
//            return Jwts.parser()
//                    .verifyWith(getSecretKey())
//                    .build()
//                    .parseSignedClaims(token)
//                    .getPayload();
//        } catch (io.jsonwebtoken.ExpiredJwtException e) {
//            throw new RuntimeException("JWT token is expired: " + e.getMessage(), e);
//        } catch (io.jsonwebtoken.MalformedJwtException | io.jsonwebtoken.SignatureException e) {
//            throw new RuntimeException("Invalid JWT token: " + e.getMessage(), e);
//        } catch (Exception e) {
//            throw new RuntimeException("Error parsing JWT token: " + e.getMessage(), e);
//        }
//    }
//
//    public boolean validateToken(String token, String username) {
//        try {
//            final String extractedUsername = extractUsername(token);
//            return (extractedUsername.equals(username) && !isTokenExpired(token));
//        } catch (Exception e) {
//            return false;
//        }
//    }
//
//    private boolean isTokenExpired(String token) {
//        return extractExpiration(token).before(new Date());
//    }
//
//    public String generateToken(String username) {
//        return Jwts.builder()
//                .setSubject(username)
//                .setIssuedAt(new Date())
//                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
//                .setId(UUID.randomUUID().toString())
//                .signWith(getSecretKey())
//                .compact();
//    }
//
//    public String generateRefreshToken(String username) {
//        return Jwts.builder()
//                .setSubject(username)
//                .setIssuedAt(new Date())
//                .setExpiration(new Date(System.currentTimeMillis() + REFRESH_TOKEN_EXPIRATION))
//                .setId(UUID.randomUUID().toString())
//                .signWith(getSecretKey())
//                .compact();
//    }
//}