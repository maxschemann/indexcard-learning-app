package de.neuefische.backend.service;

import de.neuefische.backend.model.IndexCard;
import de.neuefische.backend.model.dto.IndexCardDto;
import de.neuefische.backend.repository.IndexCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class IndexCardService {

    private final IndexCardRepository indexCardRepo;

    @Autowired
    public IndexCardService(IndexCardRepository repo) {
        this.indexCardRepo = repo;
    }

    public IndexCard addNewIndexCard(IndexCardDto indexCardDto) {
        IndexCard newIndexCard = createNewIndexCard(indexCardDto);
        return indexCardRepo.insert(newIndexCard);
    }

    public List<IndexCard> getAllIndexCards() {
        return indexCardRepo.findAll();
    }

    public IndexCard updateIndexCard(String id, IndexCardDto updatedIndexCard) {
        IndexCard newIndexCard = createNewIndexCard(updatedIndexCard);
        newIndexCard.setId(id);
        return indexCardRepo.save(newIndexCard);
    }

    private IndexCard createNewIndexCard(IndexCardDto indexCardDto){
        return IndexCard.builder()
                .term1(indexCardDto.getTerm1())
                .term2(indexCardDto.getTerm2())
                .difficulty(indexCardDto.getDifficulty())
                .build();
    }
}
