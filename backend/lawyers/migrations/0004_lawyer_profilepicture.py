# Generated by Django 5.0 on 2023-12-13 18:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lawyers', '0003_alter_lawyer_specialities_alter_lawyer_workingdays_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='lawyer',
            name='profilePicture',
            field=models.ImageField(blank=True, null=True, upload_to='profile_pictures/'),
        ),
    ]