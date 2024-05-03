package com.example.eksamen2022webprog;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SultenController {
/*Oppgave 1*/
    @GetMapping("sjekk")
    public String sjekk(){
        return "OK";
    }
}
