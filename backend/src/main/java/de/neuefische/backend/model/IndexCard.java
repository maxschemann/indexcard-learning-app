package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document (collection="indexCards")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class IndexCard {

    @Id
    private String id;
    private String languageA;
    private String languageB;
}
