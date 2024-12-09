import java.io.*;
import java.nio.file.*;
import java.util.stream.*;

public class HashCleaner {

    public static void main(String[] args) throws IOException {
        String inputFilePath = "amazonCoreService.java";
        String outputFilePath = "AmazonCoreService_Cleaned.java";

        try (Stream<String> lines = Files.lines(Paths.get(inputFilePath))) {
            Files.write(Paths.get(outputFilePath),
                lines.filter(line -> !line.trim().startsWith("// Hash"))
                     .collect(Collectors.toList())
            );
        }

        System.out.println("Hashes removed! Cleaned file saved as: " + outputFilePath);
    }
}
