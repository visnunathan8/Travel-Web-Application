package com.concordia.testing;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class mainFileTesting {
	public static void main(String[] args) throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "/Users/macbook/Downloads/ChromeDownloads/chromedriver_mac64/chromedriver");
	  	WebDriver driver = new ChromeDriver();

	  	driver.get("https://extraordinary-granita-a5fd40.netlify.app/");
		System.out.println("driver" + driver.getTitle());
		Thread.sleep(1500);
		WebElement usernameDriver = driver.findElement(By.id("username"));
		usernameDriver.sendKeys("hanna");
		Thread.sleep(1500);
		WebElement passwordDriver = driver.findElement(By.id("password"));
		passwordDriver.sendKeys("hanna");
		Thread.sleep(1500);
		WebElement accountTypeDriver = driver.findElement(By.id("accountType"));
		Select accountTypeSelect = new Select(accountTypeDriver);
		accountTypeSelect.selectByValue("travelAgent");
		WebElement signin = driver.findElement(By.id("login"));
		signin.click();
		Thread.sleep(2000);
		
		WebElement travelPackage = driver.findElement(By.id("travelPackage"));
		travelPackage.click();
		Thread.sleep(1500);
		
		WebElement addtravelpackageDriver = driver.findElement(By.id("addtravelpackage"));
		addtravelpackageDriver.click();
		Thread.sleep(1500);
		
		
		WebElement travelPackageName = driver.findElement(By.id("travelPackageName"));
		travelPackageName.sendKeys("The Royal Route");
		Thread.sleep(1500);
		
		WebElement flightId = driver.findElement(By.id("flightId"));
		Select flightIdSelect = new Select(flightId);
		flightIdSelect.selectByValue("34");
		Thread.sleep(1500);
		
		WebElement hotelId = driver.findElement(By.id("hotelId"));
		Select hotelIdSelect = new Select(hotelId);
		hotelIdSelect.selectByValue("34");
		Thread.sleep(1500);
		
		WebElement activitiesId = driver.findElement(By.id("activitiesId"));
		Select activitiesIdSelect = new Select(activitiesId);
		activitiesIdSelect.selectByValue("34");
		Thread.sleep(1500);
		
		WebElement sourceCity = driver.findElement(By.id("sourceCity"));
		sourceCity.sendKeys("Montreal");
		Thread.sleep(1500);
		
		WebElement destinationCity = driver.findElement(By.id("destinationCity"));
		destinationCity.sendKeys("Singapore");
		Thread.sleep(1500);
		
		WebElement noOfDays = driver.findElement(By.id("noOfDays"));
		noOfDays.sendKeys("12");
		Thread.sleep(1500);
		
		WebElement totalPrice = driver.findElement(By.id("totalPrice"));
		totalPrice.sendKeys("2573");
		Thread.sleep(1500);
		
		WebElement save = driver.findElement(By.id("save"));
		save.click();
		Thread.sleep(1500);
		
		
		WebElement search = driver.findElement(By.id("search"));
		search.sendKeys("The Royal");
		Thread.sleep(1500);
	}
}
