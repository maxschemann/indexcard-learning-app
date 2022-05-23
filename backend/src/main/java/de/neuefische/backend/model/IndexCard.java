package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document (collection="indexCards")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class IndexCard {

    @Id
    private String id;
    private String term1;
    private String term2;
    private Difficulty difficulty;
}
