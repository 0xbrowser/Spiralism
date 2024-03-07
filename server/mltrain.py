import pandas as pd
import numpy as np

from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.ensemble import AdaBoostClassifier
from xgboost import XGBClassifier
from lightgbm import LGBMClassifier
from catboost import CatBoostClassifier
from sklearn.neural_network import MLPClassifier

from sklearn.model_selection import train_test_split

from sklearn.metrics import precision_score, recall_score, f1_score, accuracy_score, roc_auc_score

import warnings
warnings.filterwarnings("ignore")

def train():
    # Pre-training

    # Load data
    opcodeDataset = pd.read_csv(r'feature/opcodeFeature.csv',)
    accountDataSet = pd.read_csv(r'feature/accountFeature.csv',)

    # Merge dataset
    dataset = pd.merge(opcodeDataset, accountDataSet, on='addr')

    # Split data into train and test sets
    X = dataset.iloc[:, 1:92]
    Y = dataset.iloc[:, 92]
    X_train, X_test, y_train, y_test = train_test_split(
        X, Y, test_size=0.33, random_state=7)

    # Create a model dictionary
    models = {
        # "Logistic Regression": LogisticRegression(),
        # "K-Nearest Neighbors": KNeighborsClassifier(),
        # "Support Vector Machine": SVC(probability=True),
        # "Ada Boost": AdaBoostClassifier(),
        # "Neural Network": MLPClassifier()
        "CatBoost": CatBoostClassifier(verbose=0),
        "Decision Tree": DecisionTreeClassifier(),
        "Random Forest": RandomForestClassifier(),
        "XGBoost": XGBClassifier(),
        "LightGBM": LGBMClassifier(),
    }

    # Fit the models
    for name, model in models.items():
        model.fit(X_train, y_train)
        
    print("====Model Ready====")
    return models, X_test, y_test, dataset

def score(models, X_test, y_test):
    # Calculate model score results

    # Show the score results
    results = {'Results': ['Accuracy',
                           'Precision', 'Recall', 'F1-score', 'AUC']}
    for name, model in models.items():
        results[name] = [round(accuracy_score(y_test, model.predict(X_test)), 3),
                         round(precision_score(y_test, model.predict(X_test)), 3),
                         round(recall_score(y_test, model.predict(X_test)), 3),
                         round(f1_score(y_test, model.predict(X_test)), 3),
                         round(roc_auc_score(y_test, model.predict(X_test)), 3)]
    results = pd.DataFrame(results)
    results = results.transpose()
    print(results)

    return

def predict(models, dataset, address):
    # Predict if the address is malicious

    # Get the specific data row
    row = dataset[dataset['addr'] == address]
    X_test = row.iloc[:, 1:92]
    pred = {'Prediction': 'Malicious'}
    res = []
    prob = 0
    count = 0
    for name, model in models.items():
        pred[name] = model.predict(X_test)
        res.append(int(pred[name]))
        prob = prob + pred[name]
        count = count + 1
        
    # pred = pd.DataFrame(pred)
    # pred = pred.transpose()
    # print(pred)
    
    prob = int(prob * 100 / count)

    return res, prob
