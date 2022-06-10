package de.neuefische.backend.model;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Languages {
    private Language[] languageList = new Language[]{
            new Language("en","English",new String[]{"ar","de","el","es","fa","ha","hi","id","ig","it","ka","mr","ms","pt","ro","ru","tg","tk","tn","tpi","tt","xh","yo","zh"}),
            new Language("ar","Arabic",new String[]{"en"}),
            new Language("zh","Chinese",new String[]{"en"}),
            new Language("fs","Farsi",new String[]{}),
            new Language("ka","Georgian",new String[]{}),
            new Language("de","German",new String[]{"en"}),
            new Language("el","Greek",new String[]{"en"}),
            new Language("ha","Hausa",new String[]{"en"}),
            new Language("hi","Hindi",new String[]{"en"}),
            new Language("ig","Igbo",new String[]{}),
            new Language("id","Indonesian",new String[]{"en"}),
            new Language("xh","isiXhosa",new String[]{"en"}),
            new Language("it","Italian",new String[]{"en"}),
            new Language("ms","Malay",new String[]{"en"}),
            new Language("mr","Marathi",new String[]{"en"}),
            new Language("pt","Portuguese",new String[]{"en"}),
            new Language("qu","Quechua",new String[]{"es"}),
            new Language("ro","Romanian",new String[]{}),
            new Language("ru","Russian",new String[]{"en"}),
            new Language("tn","Setswana",new String[]{"en"}),
            new Language("es","Spanish",new String[]{"en", "qu"}),
            new Language("tt","Tatar",new String[]{"en"}),
            new Language("te","Telugu",new String[]{"en"}),
            new Language("tpi","Tok Pisin",new String[]{"en"}),
            new Language("tk","Turkmen",new String[]{"en"}),
            new Language("ur","Urdu",new String[]{"en"}),
            new Language("yo","Yoruba",new String[]{"en"}),
    };
}
