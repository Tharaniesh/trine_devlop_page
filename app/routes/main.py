from flask import Blueprint, render_template

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def home():
    return "Welcome to Trine Developers"

@main_bp.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')