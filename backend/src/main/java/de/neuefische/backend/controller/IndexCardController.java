package de.neuefische.backend.controller;

import de.neuefische.backend.model.IndexCard;
import de.neuefische.backend.model.dto.IndexCardDto;
import de.neuefische.backend.service.IndexCardService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/indexcard")
public class IndexCardController {

    private final IndexCardService service;

    public IndexCardController(IndexCardService service) {
        this.service = service;
    }

    @PostMapping
    public IndexCard addNewIndexCard (@RequestBody IndexCardDto indexCardDto) {
        return service.addNewIndexCard(indexCardDto);
    }

    @GetMapping
    public List<IndexCard> getAllIndexCards () {
        return service.getAllIndexCards();
    }
}
