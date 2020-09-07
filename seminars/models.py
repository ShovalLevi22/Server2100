from django.db import models


# Create your models here.
class SeminarDay(models.Model):
    SUNDAY = 0
    MONDAY = 1
    TUESDAY = 2
    WEDNESDAY = 3
    THURSDAY = 4
    FRIDAY = 5
    SATURDAY = 6

    DAYS_CHOICES = [
        (SUNDAY, 'ראשון'),
        (MONDAY, 'שני'),
        (TUESDAY, 'שלישי'),
        (WEDNESDAY, 'רביעי'),
        (THURSDAY, 'חמישי'),
        (FRIDAY, 'שישי'),
        (SATURDAY, 'מוצ"ש'),
    ]

    day = models.IntegerField(
        # max_length=2,
        choices=DAYS_CHOICES,
        default=SUNDAY,
    )

    list_num = models.CharField(max_length=10)
    header = models.CharField(max_length=50)

    start_regi_day = models.IntegerField(
        # max_length=2,
        choices=DAYS_CHOICES,
        default=SUNDAY,
    )
    start_regi_time = models.TimeField()

    end_regi_day = models.IntegerField(
        # max_length=2,
        choices=DAYS_CHOICES,
        default=SUNDAY,
    )
    end_regi_time = models.TimeField()

    def __str__(self):
        return self.day

class Campaign(models.Model):
    sunday = models.CharField(max_length=100)