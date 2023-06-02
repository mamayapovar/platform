from django import forms


class LoginForm(forms.Form):
    email = forms.CharField(
        required=False,
        widget=forms.EmailInput(attrs={
            'class': "input  popup__input",
            'name': "email",
            'id': "email-auth",
            'placeholder': "Электронная почта"
        })
    )
    password = forms.CharField(
        required=False,
        widget=forms.PasswordInput(attrs={
            'class': "input  popup__input",
            'name': "password",
            'id': "password-auth",
            'placeholder': "Пароль"
        })
    )

    def clean(self):
        cleaned_data = super().clean()
        email = cleaned_data.get('email')
        password = cleaned_data.get('password')

class ProfileSettingsForm(forms.Form):
    username = forms.CharField(required=False)

    description = forms.CharField(required=False)

    photo = forms.ImageField(required=False)

    def clean(self):
        cleaned_data = super().clean()
        username = cleaned_data.get('username')
        description = cleaned_data.get('description')

class ChangeEmailForm(forms.Form):
    email = forms.CharField(required=False)

    def clean(self):
        cleaned_data = super().clean()
        email = cleaned_data.get('email')

class ChangePasswordForm(forms.Form):
    password_old = forms.CharField(required=False)
    password_new = forms.CharField(required=False)
    password_new_repeat = forms.CharField(required=False)

    def clean(self):
        cleaned_data = super().clean()
        password_old = cleaned_data.get('password_old')
        password_new = cleaned_data.get('password_new')
        password_new_repeat = cleaned_data.get('password_new_repeat')

class RecipeForm(forms.Form):
    title = forms.CharField(required=False)
    description = forms.CharField(required=False)
    cat = forms.CharField(required=False)
    persons = forms.IntegerField(required=False)
    cooking_time_hours = forms.CharField(required=False)
    cooking_time_minutes = forms.CharField(required=False)
    photo = forms.ImageField(required=False)

    def clean(self):
        cleaned_data = super().clean()
        title = cleaned_data.get('title')
        description = cleaned_data.get('description')
        cat = cleaned_data.get('cat')
        persons = cleaned_data.get('persons')
        cooking_time_hours = cleaned_data.get('cooking_time_hours')
        cooking_time_minutes = cleaned_data.get('cooking_time_minutes')
        photo = cleaned_data.get('photo')

class RegistrationForm(forms.Form):
    username = forms.CharField(
        required=False,
        widget=forms.TextInput(attrs={
            'class': 'input  popup__input',
            'name': 'username',
            'id': 'username-register',
            'placeholder': 'Имя и фамилия'
        }))

    email = forms.CharField(
        required=False,
        widget=forms.EmailInput(attrs={
            'class': "input  popup__input",
            'name': "email",
            'id': "email-register",
            'placeholder': "Электронная почта"
        })
    )
    password = forms.CharField(
        required=False,
        widget=forms.PasswordInput(attrs={
            'class': "input  popup__input",
            'name': "password",
            'id': "password-register",
            'placeholder': "Пароль"
        })
    )

class CommentsForm(forms.Form):
    comments_text = forms.CharField(required=False)
