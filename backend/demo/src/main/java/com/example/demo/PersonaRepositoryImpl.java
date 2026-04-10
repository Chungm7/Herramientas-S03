package com.example.demo;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Repository;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;

@Repository
public class PersonaRepositoryImpl implements PersonaRepository {

    private final ObjectMapper objectMapper = new ObjectMapper();
    private final File jsonFile = new File("personas.json");
    private List<Persona> personas = new ArrayList<>();
    private AtomicLong idGenerator = new AtomicLong(1);

    @PostConstruct
    public void init() {
        loadFromJson();
    }

    @Override
    public List<Persona> findAll() {
        return new ArrayList<>(personas);
    }

    @Override
    public Optional<Persona> findById(Long id) {
        return personas.stream().filter(p -> p.getId().equals(id)).findFirst();
    }

    @Override
    public Persona save(Persona persona) {
        if (persona.getId() == null) {
            persona.setId(idGenerator.getAndIncrement());
            personas.add(persona);
        } else {
            personas.removeIf(p -> p.getId().equals(persona.getId()));
            personas.add(persona);
        }
        saveToJson();
        return persona;
    }

    @Override
    public void deleteById(Long id) {
        personas.removeIf(p -> p.getId().equals(id));
        saveToJson();
    }

    private void loadFromJson() {
        if (jsonFile.exists()) {
            try {
                personas = objectMapper.readValue(jsonFile, new TypeReference<List<Persona>>() {});
                // Update idGenerator
                personas.stream().mapToLong(Persona::getId).max().ifPresent(maxId -> idGenerator.set(maxId + 1));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    private void saveToJson() {
        try {
            objectMapper.writeValue(jsonFile, personas);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
