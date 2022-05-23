package de.neuefische.backend.model.dto;

import de.neuefische.backend.model.Difficulty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class IndexCardDto {

    private String term1;
    private String term2;
    private Difficulty difficulty;
}
