# Google-Sheet-Email-Automation
Automated email alert system using Google Sheets and Google Apps Script to notify users when account balances fall below a defined threshold.

## 🚀 Features

- Automatically monitors account balances
- Sends personalized email alerts when balance is below the threshold
- Prevents duplicate alerts using status tracking
- Resets alert status when balance is restored
- Runs fully on Google Cloud using time-based triggers
- No manual execution required

---

## 🛠️ Technologies Used

- Google Sheets
- Google Apps Script
- Gmail (MailApp)
- Google Cloud Triggers

---

## 📊 Sheet Structure

| Column | Description |
|------|------------|
| C | User Name |
| D | Account Balance |
| E | Email Address |
| F | Alert Status (`LOW_SENT`) |

---

## ⚙️ How It Works

1. A time-based trigger runs the script automatically
2. The script checks each user’s balance
3. If balance < threshold and alert not sent:
   - Sends a personalized email
   - Marks the alert as sent
4. When balance is restored:
   - Alert status resets automatically

---

## 📩 Sample Email

