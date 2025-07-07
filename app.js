function getTrimmedUrl() {
    const input = document.getElementById("urlInput").value.trim();

    if (!input) {
        alert("Please enter a URL.");
        return null;
    }

    try {
        const url = new URL(input.startsWith('http') ? input : 'https://' + input);
        let finalUrl = url.href;

        const questionMarkIndex = finalUrl.lastIndexOf('?');
        if (questionMarkIndex !== -1) {
            finalUrl = finalUrl.substring(0, questionMarkIndex);
        }

        return finalUrl;
    } catch (e) {
        alert("Invalid URL.");
        return null;
    }
}

document.getElementById("goButton").addEventListener("click", function () {
    const trimmedUrl = getTrimmedUrl();
    if (trimmedUrl) {
        window.location.href = trimmedUrl;
    }
});

document.getElementById("copyButton").addEventListener("click", async function () {
    const trimmedUrl = getTrimmedUrl();
    if (trimmedUrl) {
        try {
            await navigator.clipboard.writeText(trimmedUrl);
            alert("URL copied to clipboard!");
        } catch (err) {
            alert("Failed to copy URL.");
        }
    }
});
