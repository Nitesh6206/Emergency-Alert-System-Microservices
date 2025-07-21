//package com.nitesh.apigateway.Controller;
//
//import com.nitesh.apigateway.Dto.AuthRequest;
//import com.nitesh.apigateway.Dto.UserDto;
//import com.nitesh.apigateway.Helper.UserDetailsFeing;
//import com.nitesh.apigateway.Security.JwtUtil;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.HashMap;
//import java.util.Map;
//
//@RestController
//@RequestMapping("/api/auth")
//public class AuthController {
//
//    @Autowired
//    private UserDetailsFeing userDetailsFeing;
//
//    @Autowired
//    private JwtUtil jwtUtil;
//
//    // Register
//    @PostMapping("/register")
//    public ResponseEntity<String> register(@RequestBody UserDto userDto) {
//        return userDetailsFeing.registerUser(userDto);
//    }
//
//    // Login
//    @PostMapping("/login")
//    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
//        try {
//            ResponseEntity<UserDto> response = userDetailsFeing.authenticateUser(request);
//
//            if (response.getStatusCode().is2xxSuccessful() && response.getBody() != null) {
//                String jwt = jwtUtil.generateToken(response.getBody().getEmail());
//                String refreshToken = jwtUtil.generateRefreshToken(response.getBody().getEmail());
//
//                Map<String, String> tokens = new HashMap<>();
//                tokens.put("accessToken", jwt);
//                tokens.put("refreshToken", refreshToken);
//
//                return ResponseEntity.ok(tokens);
//            } else {
//                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
//            }
//
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed: " + e.getMessage());
//        }
//    }
//}
//
