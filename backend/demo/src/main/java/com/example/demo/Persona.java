package com.example.demo;

public class Persona {
    private Long id;
    private String nombre;
    private String apellido;
    private int edad;
    private String dondeNacio;
    private String colorFavorito;

    // Constructors
    public Persona() {}

    public Persona(Long id, String nombre, String apellido, int edad, String dondeNacio, String colorFavorito) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dondeNacio = dondeNacio;
        this.colorFavorito = colorFavorito;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getDondeNacio() {
        return dondeNacio;
    }

    public void setDondeNacio(String dondeNacio) {
        this.dondeNacio = dondeNacio;
    }

    public String getColorFavorito() {
        return colorFavorito;
    }

    public void setColorFavorito(String colorFavorito) {
        this.colorFavorito = colorFavorito;
    }
}
