//package com.nitesh.apigateway.Security;
//
//import com.nitesh.apigateway.Dto.UserDto;
//import com.nitesh.apigateway.Helper.UserDetailsFeing;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import java.util.Collection;
//import java.util.Collections;
//
//@Service
//public class CustomUserDetailsService implements UserDetailsService {
//
//    @Autowired
//    private UserDetailsFeing userDetailsFeing;
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        try {
//            UserDto user = userDetailsFeing.findUserDetails(username);
//            if (user == null) {
//                throw new UsernameNotFoundException("User not found: " + username);
//            }
//
//            // Convert role string to SimpleGrantedAuthority
//            Collection<GrantedAuthority> authorities = Collections.singletonList(
//                    new SimpleGrantedAuthority(user.getRole())
//            );
//
//            return User.withUsername(user.getUsername())
//                    .password(user.getPassword())
//                    .authorities(authorities)
//                    .accountExpired(false)
//                    .accountLocked(false)
//                    .credentialsExpired(false)
//                    .disabled(false)
//                    .build();
//        } catch (Exception e) {
//            throw new UsernameNotFoundException("Error retrieving user: " + username, e);
//        }
//    }
//}
