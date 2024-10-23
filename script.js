document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form_app');
    const otherInsrumentDisplay = document.getElementById('other_instr')
    const otherGenreDisplay = document.getElementById('other_genre')
    const specifyGenre = document.getElementById('specify_genre');
    const otherGenre = document.getElementById('genre_select');
    const specifyInstrument = document.getElementById('specify_instrument');
    const otherInstrument = document.getElementById('other_instruments');


    otherGenreDisplay.style.display = 'none';
    otherInsrumentDisplay.style.display = 'none';

     // Show/hide specify genre field based on selection
  otherGenre.addEventListener('change', function() {
    if (otherGenre.value === 'Other'){
        otherGenreDisplay.style.display = 'block';
        specifyGenre.required = true;
    } else {
        otherGenreDisplay.style.display = 'none';
        specifyGenre.required = false;
    }
});

// Show/hide specify instrument field based on checkbox
otherInstrument.addEventListener('change', function() {
    if (otherInstrument.checked === true){
        otherInsrumentDisplay.style.display = 'block';
        specifyInstrument.required = true;
    } else {
        otherInsrumentDisplay.style.display = 'none';
        specifyInstrument.required = false;
    }
});

    form.addEventListener('submit', function(event) {
       
// Prevent submitting a form if any instruments aren't chosen
        const checkboxes = form.querySelectorAll('input[type="checkbox"][name="instruments"]');
        let isChecked = false;
        
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                isChecked = true;
            }
        });
        
        if (!isChecked) {
            event.preventDefault();
            alert('Please select at least one instrument.');
            return;
        };
// Shows the success message
        event.preventDefault();

        alert("Thank you for your application!")
        form.reset();
    });
    
});

