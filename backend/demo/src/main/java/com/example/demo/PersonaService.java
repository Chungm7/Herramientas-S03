package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonaService {

    @Autowired
    private PersonaRepository personaRepository;

    public List<Persona> getAllPersonas() {
        return personaRepository.findAll();
    }

    public Optional<Persona> getPersonaById(Long id) {
        return personaRepository.findById(id);
    }

    public Persona createPersona(Persona persona) {
        return personaRepository.save(persona);
    }

    public Persona updatePersona(Long id, Persona personaDetails) {
        Optional<Persona> optionalPersona = personaRepository.findById(id);
        if (optionalPersona.isPresent()) {
            Persona persona = optionalPersona.get();
            persona.setNombre(personaDetails.getNombre());
            persona.setApellido(personaDetails.getApellido());
            persona.setEdad(personaDetails.getEdad());
            persona.setDondeNacio(personaDetails.getDondeNacio());
            persona.setColorFavorito(personaDetails.getColorFavorito());
            return personaRepository.save(persona);
        }
        return null;
    }

    public boolean deletePersona(Long id) {
        if (personaRepository.findById(id).isPresent()) {
            personaRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
