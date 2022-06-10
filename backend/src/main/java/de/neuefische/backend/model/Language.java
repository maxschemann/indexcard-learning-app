package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Language {
    private String id;
    private String name;
    private String[] compatibleLanguages;
}
