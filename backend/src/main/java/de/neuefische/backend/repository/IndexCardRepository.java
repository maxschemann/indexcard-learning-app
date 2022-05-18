package de.neuefische.backend.repository;

import de.neuefische.backend.model.IndexCard;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IndexCardRepository extends MongoRepository<IndexCard, String> {
}
