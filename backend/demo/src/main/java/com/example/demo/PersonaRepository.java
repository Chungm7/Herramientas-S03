package com.example.demo;

import java.util.List;
import java.util.Optional;

public interface PersonaRepository {
    List<Persona> findAll();
    Optional<Persona> findById(Long id);
    Persona save(Persona persona);
    void deleteById(Long id);
}
