package de.neuefische.backend.service;

import de.neuefische.backend.model.IndexCard;
import de.neuefische.backend.repository.IndexCardRepository;
import lombok.Builder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IndexCardService {

    private final IndexCardRepository indexCardRepo;

    @Autowired
    public IndexCardService(IndexCardRepository repo) {
        this.indexCardRepo = repo;
    }

    public IndexCard addNewIndexCard(IndexCard indexCard) {
        return indexCardRepo.insert(indexCard);
    }
}
