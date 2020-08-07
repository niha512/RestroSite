package com.site.restro.controller;

import com.site.restro.model.UserDetails;
import com.site.restro.service.LoginValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestroController {

    @Autowired
    private LoginValidationService loginValidationService;

    @PutMapping(value = "/userValidation", consumes = "application/json")
    public ResponseEntity<Object> getUserValidation(@RequestBody UserDetails userDetails){
        System.out.println(userDetails);
        return new ResponseEntity<>(loginValidationService.validateUser(userDetails), HttpStatus.OK);
    }
}
