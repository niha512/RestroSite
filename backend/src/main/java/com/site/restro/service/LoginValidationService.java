package com.site.restro.service;

import com.site.restro.model.UserDetails;
import com.site.restro.respository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginValidationService {

    @Autowired
    private UserDetailsRepository userDetailsRepository;

    public Boolean validateUser(UserDetails userDetails){
        Optional<UserDetails>  user = userDetailsRepository.findById(userDetails.getUsername());
        if(user.isPresent()){
            return true;
        }
        return false;
    }
}
