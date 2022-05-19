package de.neuefische.backend.controller;

import de.neuefische.backend.model.IndexCard;
import de.neuefische.backend.service.IndexCardService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/indexcard")
public class IndexCardController {

    private final IndexCardService service;

    public IndexCardController(IndexCardService service) {
        this.service = service;
    }

    @PostMapping
    public IndexCard addNewIndexCard (@RequestBody IndexCard indexCard) {
        return service.addNewIndexCard(indexCard);
    }
}
